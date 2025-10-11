import { parsePhoneNumberFromString } from "libphonenumber-js";

export function mobileValidation(mobile: string) {
  const result = parsePhoneNumberFromString(mobile, "IR");
  if (!result) throw new Error("Invalid phone number");

  const phoneNumber = result.formatNational().replace(/[\s\(\)\-]*/gim, "");
  const fullNumber = result.getURI().replace("tel:", "");
  
  return {
    country_code: result.country,
    phone_code: `+${result.countryCallingCode}`,
    phoneNumber,
    fullNumber,
  };
}
