import { Select, SelectItem } from "@nextui-org/select";
import Image from "next/image";
import { SelectorIcon } from "../shared/SelectorIcon";

export default function SelectContainer({currency,handleChange,options,title}:any) {

    return (
        <div className="flex flex-col rounded-3xl gap-4 bg-white pt-10 pl-11 pb-12 max-w-xl w-full">
        <h3 className="text-base font-semibold text-soft_blue">
          {title}
        </h3>
        <div className=" flex items-center gap-4 flex-wrap">
          <div className="min-w-[200px]  xs:min-w-[252px] text-center">
            <p className="text-xl xs:text-2xl font-black">
              {' '}
              {currency || '------'}{' '}
            </p>
          </div>
          <div>
            <Select
              aria-label="Selecciona una opción"
              onChange={handleChange}
              selectorIcon={<SelectorIcon />}
              placeholder="---"
              radius="full"
              className="w-24"
              items={options}
              classNames={{
                selectorIcon: 'static',
                trigger:
                  'bg-general_backgound flex flex-row justify-center items-center gap-[15px] ',
                popover: 'w-[220px] bg-general_backgound rounded-xl',
              }}
            >
              {options.map((option:any) => (
                <SelectItem
                  classNames={{
                    title: 'flex gap-3',
                  }}
                  key={option.label}
                  value={option.value}
                  textValue={option.value}
                >
                  <Image src={option.img} width={20} height={20} alt="op" />
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    );
  }
  