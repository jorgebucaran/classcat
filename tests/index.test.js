import cc from "../index.js"
import { t, equal } from "twist"

export default [
  t("classcat", [
    t("nothing, null, undefined", [
      equal(cc(), ""),
      equal(cc(null), ""),
      equal(cc(undefined), ""),
      equal(cc([, , , null, undefined]), ""),
    ]),
    t("empty objects", [
      equal(cc({}), ""),
      equal(cc([]), ""),
      equal(cc([{}]), ""),
      equal(cc([{}, {}, {}]), ""),
    ]),
    t("booleans", [
      equal(cc(true), ""),
      equal(cc(false), ""),
      equal(cc([true, false]), ""),
    ]),
    t("empty strings", [
      equal(cc(""), ""),
      equal(
        cc({
          dog: "",
          cat: "",
          mouse: "",
        }),
        ""
      ),
      equal(cc(["", "", ""]), ""),
    ]),
    t("arrays of strings", [
      equal(cc(["dog", "cat", false, "mouse"]), "dog cat mouse"),
    ]),
    t("array of arrays", [
      equal(cc(["dog", ["cat", [false, "mouse"]]]), "dog cat mouse"),
    ]),
    t("object of key:string pairs", [
      equal(
        cc({
          dog: true,
          cat: true,
          dodo: false,
          mouse: true,
        }),
        "dog cat mouse"
      ),
    ]),
    t("array of objects and arrays", [
      equal(
        cc([
          "owl",
          "eel-fox",
          {
            "elk-dik": true,
          },
          ["auk", "olm", "emu"],
        ]),
        "owl eel-fox elk-dik auk olm emu"
      ),
    ]),
  ]),
]
