"use client";

import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { FaGithub } from "rocketicons/fa";
import { useSWRConfig } from "swr";
import { SelectTerm } from "@/components/form";
import { Loading } from "@/components/layouts";
import { Settings } from "@/config";
import { currentUserState } from "@/features/auth/api";
import { useFetchData } from "@/lib";

export default function Profile({ uuid }) {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [isEditing, setIsEditing] = useState(false);
  const [imageBase64, setImageBase64] = useState("");
  const data = useFetchData(`${Settings.API_URL}/users/${uuid}`);
  const { mutate } = useSWRConfig();

  if (!data) return <Loading />;
  if (data.error) return <p>{data.error}</p>;

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setImageBase64("");
    }
  };

  const handleSelectAvatar = async () => {
    const [handle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
          },
        },
      ],
    });

    const file = await handle.getFile();
    const reader = new FileReader();
    reader.onload = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const profile = formData.get("profile");
    const avatar = imageBase64 ? imageBase64 : data.avatar;
    const learned_tags = formData.get("learned_tags").split(",");
    const learning_tags = formData.get("learning_tags").split(",");
    const term = data.term ? null : formData.get("term");

    const updateData = {
      name: name,
      profile: profile,
      avatar: avatar,
      learned_tags: learned_tags,
      learning_tags: learning_tags,
      term: term,
    };

    const token = localStorage.getItem("access_token");
    const response = await fetch(`${Settings.API_URL}/users/${uuid}`, {
      method: "PUT",
      body: JSON.stringify({ user: updateData }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setIsEditing(false);
      const data = await response.json();
      console.log(data);
      setCurrentUser(data);
      mutate(`${Settings.API_URL}/users/${uuid}`);
      mutate(`${Settings.API_URL}/auth/me`);
    } else {
      alert("エラーが発生しました");
    }
  };

  return (
    <section className="relative z-0 mt-16 w-full rounded bg-white px-2 pb-4 md:pb-4">
      {currentUser.uuid === data.uuid && (
        <button
          type="button"
          onClick={handleEdit}
          className="absolute right-2 top-2 z-10 rounded border border-slate-700 bg-slate-700 px-2 py-1 text-sm text-white transition-all hover:bg-white hover:text-slate-700"
        >
          {isEditing ? "戻る" : "編集"}
        </button>
      )}
      <div className="absolute -top-10 flex w-full items-start justify-center md:justify-start">
        {isEditing ? (
          <button
            type="button"
            onClick={handleSelectAvatar}
            className={`relative block aspect-square w-20 rounded-full ${imageBase64 || data.avatar ? "" : "bg-runteq-primary"} after:absolute after:left-0 after:top-0 after:size-20 after:cursor-pointer after:rounded-full after:bg-black/50 after:transition-all after:content-[''] after:hover:bg-black/10`}
          >
            {(imageBase64 || data.avatar) && (
              <Image
                src={imageBase64 ? imageBase64 : data.avatar}
                alt="avatar"
                width={500}
                height={500}
                className="absolute left-0 top-0 size-full rounded-full object-cover"
                unoptimized
              />
            )}
          </button>
        ) : data.avatar && !data.avatar.endsWith("http://localhost:3000") ? (
          <Image
            src={data.avatar}
            width={80}
            height={80}
            alt="avatar"
            className="rounded-full"
            unoptimized
          />
        ) : (
          <div className="aspect-square w-20 rounded-full bg-runteq-primary" />
        )}
      </div>
      <div className="pt-11 md:max-w-[900px] md:pl-24 md:pt-7">
        <div className="mb-4 flex items-center justify-center md:absolute md:-top-8 md:justify-start md:pb-0">
          <div className="grid grid-rows-2 items-center justify-center md:justify-start">
            {isEditing ? (
              <div className="flex items-end gap-2 md:justify-start">
                {data.term ? (
                  <span className="text-sm">{data.term}期</span>
                ) : (
                  <SelectTerm />
                )}
                <input
                  type="text"
                  name="name"
                  form="profileForm"
                  defaultValue={data.name}
                  className="w-44 rounded bg-slate-200 p-2"
                  placeholder="ひさじゅ"
                />
              </div>
            ) : (
              <h1 className="flex items-end justify-center gap-2 text-xl md:justify-start md:text-2xl">
                {data.term && <span className="text-sm">{data.term}期</span>}
                {data.name}
              </h1>
            )}
            <div className="flex w-64 items-start justify-center gap-2 md:w-full md:justify-start">
              <FaGithub className="inline-block size-6" />
              <p>id: {uuid}</p>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col gap-2">
          {isEditing ? (
            <textarea
              col={3}
              name="profile"
              form="profileForm"
              className="rounded bg-slate-200 p-2"
              defaultValue={data.profile}
            ></textarea>
          ) : (
            <p className="text-sm md:text-base">{data.profile}</p>
          )}
          <div>
            <dl className="flex w-full flex-col">
              <div className="mb-2 w-full border-b pb-2">
                <dt>
                  勉強中
                  {isEditing && (
                    <span className="text-xs text-red-400">
                      「英数字」「,」「.」半角スペースのみ
                    </span>
                  )}
                </dt>
                {isEditing ? (
                  <input
                    type="text"
                    name="learning_tags"
                    form="profileForm"
                    defaultValue={data.learning_tags
                      .map((tag) => tag.name)
                      .join(",")}
                    className="w-full rounded bg-slate-200 p-2"
                    placeholder="Ruby, Ruby on Rails, JavaScript"
                  />
                ) : (
                  <dd className="ml-8 flex flex-wrap items-center justify-start gap-1">
                    {data.learning_tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-xl bg-slate-300 px-2"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </dd>
                )}
              </div>
              <div className="w-full">
                <dt>
                  開発経験
                  {isEditing && (
                    <span className="text-xs text-red-400">
                      「英数字」「,」「.」半角スペースのみ
                    </span>
                  )}
                </dt>
                {isEditing ? (
                  <input
                    type="text"
                    name="learned_tags"
                    form="profileForm"
                    defaultValue={data.learned_tags
                      .map((tag) => tag.name)
                      .join(",")}
                    className="w-full rounded bg-slate-200 p-2"
                    placeholder="Ruby, Ruby on Rails, JavaScript"
                  />
                ) : (
                  <dd className="ml-8 flex flex-wrap items-center justify-start gap-1">
                    {data.learned_tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-xl bg-slate-300 px-2"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </dd>
                )}
              </div>
            </dl>
          </div>
        </div>
        {isEditing && (
          <form
            id="profileForm"
            className="flex w-full flex-col items-center justify-center gap-2"
            onSubmit={handleSave}
          >
            {!data.term && (
              <p className="text-center text-red-500">
                ※入学期は一度選ぶと修正できません
              </p>
            )}
            <button
              type="submit"
              className="rounded border border-runteq-secondary bg-runteq-secondary px-2 py-1 text-white transition-all hover:bg-white hover:text-runteq-secondary"
            >
              保存
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
