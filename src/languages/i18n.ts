import i18next from "i18next"
import en from "./en.json"
import vi from "./vi.json"

const resources = {
  en: { transaction: en },
  vi: { transaction: vi },
}

i18next.init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources,
})
  .then(() => {
    console.log('Locale init successfully')
  })
