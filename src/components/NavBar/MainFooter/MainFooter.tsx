import Link from "next/link";
import Image from "next/image";
import { Chip } from 'primereact/chip';

const MainFooter = () => {
  const facebookPlugin = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064496210098&tabs=event&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1198225674435177" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
  return (
    <div className="bg-white p-5 drop-shadow-2xl">
      <div className="flex items-center justify-around flex-wrap gap-2">
        <Link href="/">
          <div className="h-10 aspect-[5/1] relative">
            <Image
              src="/assets/logo_web.png"
              alt="mamgahay"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-row items-center flex-wrap justify-center gap-4">
          <Link href="/">
            <Chip label="Mangahay" />
          </Link>
          <Link href="/">
            <Chip label="Truyện tranh online" />
          </Link>
          <Link href="/">
            <Chip label="Manga" />
          </Link>
          <Link href="/">
            <Chip label="Manhwa" />
          </Link>
          <Link href="/">
            <Chip label="Manhua" />
          </Link>
          <Link href="/">
            <Chip label="Truyện Nhật" />
          </Link>
          <Link href="/">
            <Chip label="Truyện Hàn" />
          </Link>
          <Link href="/">
            <Chip label="Truyện Trung Quốc" />
          </Link>
          <Link href="/">
            <Chip label="Truyện mới nhất" />
          </Link>
          <Link href="/">
            <Chip label="Truyện hot nhất" />
          </Link>
          <Link href="/">
            <Chip label="Truyện manga top" />
          </Link>
          <Link href="/">
            <Chip label="Top manga" />
          </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: facebookPlugin }}></div>
      </div>
      <h1 className="text-center mt-2">
        Bản quyền bởi mangahay.top - Trang web đọc truyện tranh - {new Date().getFullYear()}
      </h1>
    </div>
  );
};

export default MainFooter;
