import { RiArrowRightSFill } from 'react-icons/ri';

type SettingsOptionProps = {
  sideBox: string;
  setSideBox: (value: string) => void;
  active: string;
  title: string;
};

const SettingsOption: React.FC<SettingsOptionProps> = ({ sideBox, setSideBox, active, title }) => {
    return (
        <div onClick={() => setSideBox(active)} className={`${sideBox == active ? 'settings-options-blue' : 'settings-options-white'}`}>
        <h4>{title}</h4>
        <RiArrowRightSFill/>           
      </div>
    )
}

export default SettingsOption;

