import { MacbookScroll } from "../ui/macbook-scroll";

export default function Macbook() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] ">
      <MacbookScroll
        title={
          <span className="text-white">
            You are looking at a <span className="text-[#0070F3]">Macbook</span>{" "}
          </span>
        }
        showGradient={false}
        src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/cld-sample-2"
      />
    </div>
  );
}
