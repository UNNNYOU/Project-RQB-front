"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "rocketicons/fa";

export default function Profile({ uuid }) {
  const [isEditing, setIsEditing] = useState(false);
  const [imageBase64, setImageBase64] = useState("");

  const handleEdit = () => {
    setIsEditing(!isEditing);
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

  const handleSave = () => {};

  return (
    <section className="relative z-0 mt-16 w-full rounded bg-white px-2 pb-4 md:pb-4">
      <button
        type="button"
        onClick={() => handleEdit()}
        className="absolute right-2 top-2 z-10 rounded bg-slate-700 px-2 py-1 text-sm text-white"
      >
        {isEditing ? "保存せずに戻る" : "編集"}
      </button>
      <div className="absolute -top-10 flex w-full items-start justify-center md:justify-start">
        {isEditing ? (
          <button
            type="button"
            onClick={handleSelectAvatar}
            className={`relative block aspect-square w-20 rounded-full ${imageBase64 ? "" : "bg-runteq-primary"} after:absolute after:left-0 after:top-0 after:size-20 after:cursor-pointer after:rounded-full after:bg-black/50 after:transition-all after:content-[''] after:hover:bg-black/10`}
          >
            {imageBase64 && (
              <Image
                src={imageBase64}
                alt="avatar"
                width={500}
                height={500}
                className="absolute left-0 top-0 size-full rounded-full object-cover"
              />
            )}
          </button>
        ) : (
          <div className="aspect-square w-20 rounded-full bg-runteq-primary" />
        )}
      </div>
      <div className="pt-11 md:max-w-[900px] md:pl-24 md:pt-7">
        <div className="mb-4 flex items-center justify-center md:absolute md:-top-8 md:justify-start md:pb-0">
          <div className="grid grid-rows-2 items-center justify-center md:justify-start">
            {isEditing ? (
              <input
                type="text"
                className="rounded bg-slate-200 p-2"
                placeholder="ひさじゅ"
              />
            ) : (
              <h1 className="flex items-end justify-center gap-2 text-xl md:text-2xl">
                <span className="text-sm">52期</span>ひさじゅ
              </h1>
            )}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <FaGithub className="inline-block size-6" />
              <p>id: ******</p>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col gap-2">
          {isEditing ? (
            <textarea col={3} className="rounded bg-slate-200 p-2"></textarea>
          ) : (
            <p className="text-sm md:text-base">
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
            </p>
          )}
          <div>
            <dl className="flex w-full flex-col">
              <div className="mb-2 w-full border-b pb-2">
                <dt>勉強中</dt>
                {isEditing ? (
                  <input
                    type="text"
                    className="w-full rounded bg-slate-200 p-2"
                    placeholder="Ruby, Ruby on Rails, JavaScript"
                  />
                ) : (
                  <dd className="ml-8 flex flex-wrap items-center justify-start gap-1">
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                  </dd>
                )}
              </div>
              <div className="w-full">
                <dt className="w-20">開発経験</dt>
                {isEditing ? (
                  <input
                    type="text"
                    className="w-full rounded bg-slate-200 p-2"
                    placeholder="Ruby, Ruby on Rails, JavaScript"
                  />
                ) : (
                  <dd className="ml-8 flex flex-wrap items-center justify-start gap-1">
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      Ruby on Rails
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">Ruby</span>
                    <span className="rounded-xl bg-slate-300 px-2">
                      JavaScript
                    </span>
                    <span className="rounded-xl bg-slate-300 px-2">HTML</span>
                  </dd>
                )}
              </div>
            </dl>
          </div>
        </div>
        {isEditing && (
          <div className="flex w-full items-center justify-center">
            <button
              type="button"
              onClick={handleSave}
              className="rounded border border-runteq-secondary bg-runteq-secondary px-2 py-1 text-white transition-all hover:bg-white hover:text-runteq-secondary"
            >
              保存
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
