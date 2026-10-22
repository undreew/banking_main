import React from 'react';

import { Info } from "lucide-react";
import { isArray, isEmpty, values } from "lodash";

import { ERROR_SLUGS } from "@/constants/error";
import BnkAlert from "@/components/Alert/BnkAlert";

const ERROR_VARIANT = {
  [ERROR_SLUGS["rate-limited"]]: {
    description: "Try again in a minute. Your account is not locked.",
    variant: "pending"
  },
  [ERROR_SLUGS["validation-failed"]]: {
    description: "Check both and try again.",
    variant: "danger"
  },
  [ERROR_SLUGS["unauthenticated"]]: {
    description: "Check both and try again.",
    variant: "danger"
  }
}

const getAlertProps = (error) => {
  const { code, fieldErrors } = error.errorReponse;
  const { variant = "danger", description } = ERROR_VARIANT[code] || "";
  return { variant, description: !isEmpty(fieldErrors) ? values(fieldErrors) : description };
}

const AuthErrorAlert = (props) => {
  const { isError, error } = props;
  if (!isError) return;

  const { variant, description } = getAlertProps(error);

  const alertDescription = !!description && (
    <ul className="flex flex-col gap-1 mt-3">
      {isArray(description) ? description.map((d, index) => {
        return <li className="list-disc" key={index}>{d}</li>
      }) : description}
    </ul>
  );

  return (
    (!!isError && (
      <BnkAlert
        icon={<Info/>}
        className="mt-5"
        variant={variant}
        description={alertDescription}
        title={error.errorReponse.detail}
      />
    ))
  );
};

export default AuthErrorAlert;