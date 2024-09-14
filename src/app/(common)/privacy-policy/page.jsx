import Link from "next/link";
import { Routes } from "@/config";

export default function PrivacyPolicy() {
  return (
    <article className="md:container md:max-w-[900px]">
      <h1 className="my-8 text-center text-xl"><span className="relative after:absolute after:inset-x-0  after:-bottom-3 after:mx-auto after:h-1 after:w-14 after:justify-center after:rounded after:bg-slate-300 after:content-['']">プライバシーポリシー</span></h1>
      <div className="rounded bg-white p-4 md:p-8">
        <section>
          <h2 className="mb-2 font-semibold">ユーザーから取得する情報</h2>
          <p>runteq overflow運営（以降運営）は、ユーザーから以下の情報を取得します。</p>
          <ul className="ml-8 mt-4 list-disc">
            <li>氏名(ニックネームやペンネームも含む)</li>
            <li>写真や動画</li>
            <li>外部サービスでお客様が利用するID、その他外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報</li>
          </ul>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">ユーザーの情報を利用する目的</h2>
          <p>運営は、ユーザーから取得した情報を、以下の目的のために利用します。</p>
          <ul className="ml-8 mt-4 list-disc">
            <li>当サービスに関する登録の受付、ユーザーの本人確認、認証のため</li>
            <li>ユーザーの当サービスの利用履歴を管理するため</li>
            <li>当サービスにおけるユーザーの行動履歴を分析し、当サービスの維持改善に役立てるため</li>
            <li>当サービスに関するご案内をするため</li>
            <li>ユーザーからのお問い合わせに対応するため</li>
            <li>運営の規約や法令に違反する行為に対応するため</li>
            <li>当サービスの変更、提供中止、終了をご連絡するため</li>
            <li>当サービス規約の変更などを通知するため</li>
            <li>以上のほか、当サービスの提供、維持、保護及び改善のため</li>
          </ul>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">安全管理のために講じた措置</h2>
          <p>運営が、ユーザーから取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。</p>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">第三者提供</h2>
          <p>運営は、お客様から取得する情報のうち、個人データ（個人情報保護法第１６条第３項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。<br />但し、次の場合は除きます。</p>
          <ul className="ml-8 mt-4 list-disc">
            <li>個人データの取扱いを外部に委託する場合</li>
            <li>運営や当サービスが買収された場合</li>
            <li>事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）</li>
            <li>その他、法律によって合法的に第三者提供が許されている場合</li>
          </ul>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">アクセス解析ツール</h2>
          <p>運営は、ユーザーのアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。</p>
          <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="my-2 ml-4 block text-blue-500 underline hover:opacity-80">Googleアナリティクス利用規約</Link>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">プライバシーポリシーの変更</h2>
          <p>運営は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>
        </section>
        <section className="my-4">
          <h2 className="mb-2 font-semibold">お問い合わせ</h2>
          <p>ユーザーの情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のお問合せフォームにご連絡ください。</p>
          <p><Link href={Routes.contact} className="my-2 ml-4 block text-blue-500 underline hover:opacity-80">お問合せフォーム</Link></p>
        </section>
        <div className="text-end">
          <p>2024年09月13日 制定</p>
        </div>
      </div>
    </article>
  );
}
