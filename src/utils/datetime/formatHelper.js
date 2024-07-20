import { format, isDate, isValid } from "date-fns";
import { vi } from "date-fns/locale"; // import all locales we need

// ----------------------------------------------------------------------
export const FormatType = {
  fullDateTimeWithSecond: "fullDateTimeWithSecond",
};

export const formatDate = (value, formatType, lng) => {
  if (!isDate(value)) return value;
  switch (formatType) {
    case FormatType.fullDateTimeWithSecond:
      return format(value, "yyyy-MM-dd pp", { locale: vi });
    default:
      return format(value, "P", { locale: vi });
  }
};

// ----------------------------------------------------------------------

export const formatDateRequest = (date) => {
  const convertDate = new Date(date);
  if (!isDate(convertDate) || !isValid(convertDate)) return "";

  return format(convertDate, "yyyy-MM-dd");
};

// ----------------------------------------------------------------------

const FORMAT_TYPE = {
  sameMonth: "sameMonth",
  diffMonth: "diffMonth",
};

const LANGUAGES = {
  en: "en",
  ja: "ja",
};

export function formatDateRange(
  startDate,
  endDate,
  language = LANGUAGES.ja,
  formatType = FORMAT_TYPE.sameMonth,
  defaultFromFormat = "",
  defaultToFormat = ""
) {
  let fromDateFormat = defaultFromFormat || "yyyy/MM/dd";
  let toDateFormat = defaultToFormat || "yyyy/MM/dd";

  switch (language) {
    case LANGUAGES.ja:
      fromDateFormat = "yyyy/MM/dd";
      toDateFormat = formatType === FORMAT_TYPE.diffMonth ? "MM/dd" : "dd";
      break;
    case LANGUAGES.en:
      fromDateFormat = formatType === FORMAT_TYPE.diffMonth ? "dd/MM" : "dd";
      toDateFormat = "dd/MM/y";
      break;
    default:
      break;
  }
  const formattedStartDate = format(startDate, fromDateFormat, { locale: vi });
  const formattedEndDate = format(endDate, toDateFormat, { locale: vi });
  return `${formattedStartDate} ~ ${formattedEndDate}`;
}
