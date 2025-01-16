import { Mail, MapPin, Phone, User } from "lucide-react";
import PointIcon from "./PointIcon";

const ContactMenu = ({ ownerName, address, email, phone }) => {
  return (
    <div className="flex flex-col gap-4 flex-1 h-fit rounded-lg bg-secondary-50 border p-[1.25rem]">
      <h1 className="text-[1.25rem] md:text-[1.4rem] font-bold">
        Contact Details
      </h1>
      <div className="flex flex-col gap-3 text-[0.95rem] text-slate-500">
        {ownerName && (
          <PointIcon text={ownerName}>
            <User />
          </PointIcon>
        )}
        {address && (
          <PointIcon text={address}>
            <MapPin />
          </PointIcon>
        )}
        {email && (
          <PointIcon text={email}>
            <Mail />
          </PointIcon>
        )}
        {phone && (
          <PointIcon text={phone}>
            <Phone />
          </PointIcon>
        )}
      </div>
    </div>
  );
};

export default ContactMenu;
