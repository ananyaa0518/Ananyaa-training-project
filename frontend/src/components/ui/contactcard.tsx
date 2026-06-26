type ContactCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ContactCard({ icon, title, description }: ContactCardProps) {
  return (
    <div className="rounded-[16px] bg-white p-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#F5EFE2]">
          <img src={icon} alt={title} className="h-8 w-8 object-contain" />
        </div>

        <div>
          <h3 className="text-[20px] font-bold text-[#3B3F4A]">{title}</h3>

          <p className="mt-1 text-[14px] leading-7 text-[#8A8A8A]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
