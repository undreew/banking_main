import React from 'react';

import { join, map } from "lodash";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field";

const BnkRadioChoiceItem = ({ title, description, value, onClick }) => {
  const id = join([title, value], "-");

  return (
    <FieldLabel htmlFor={id} className="hover:!bg-[var(--accent-light-bnk)]/10 cursor-pointer">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>{title}</FieldTitle>
          <FieldDescription>
            {description}
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem value={value} id={id} onClick={(e) => onClick(e)}/>
      </Field>
    </FieldLabel>
  );
};

const BnkRadioChoiceCard = (props) => {
  const { options, labels, defaultValue } = props;

  return (
    <RadioGroup defaultValue={defaultValue}>
      {map(options, (option, index) => {
        const props = {
          value: option,
          title: labels[option].label,
          description: labels[option].description
        };
        return (
          <BnkRadioChoiceItem key={index} {...props} />
        );
      })}
    </RadioGroup>
  );
};

export default BnkRadioChoiceCard;