
interface HeaderProps {
    title: string;
    subtitle: string;
    nextTitle?: string;
    nextSubtitle?: string;
  }

  const Header: React.FC<HeaderProps> = ({ title, subtitle, nextTitle, nextSubtitle }) => {
    return (
      <div className="my-3">
        <h2 className="text-4xl font-bold">{title}</h2>
        <h5 className="text-sm mt-2">{subtitle}</h5>

        <h2 className="text-3xl font-bold mt-5 mb-3">{nextTitle}</h2>
        <h5 className="text-sm md:w-96">{nextSubtitle}</h5>
      </div>
    );
  };
  

  export const SubText: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
      <div className="m-1">
        <h5 className="text-4xl font-bold">{title}</h5>
        <h6 className="text-sm mt-2">{subtitle}</h6>
      </div>
    );
  };
export default Header;