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
    t("numbers", [
      equal(cc(0), "0"),
      equal(cc([0, 1]), "0 1"),
      equal(cc({ 0: true, 1: true }), "0 1"),
    ]),
    t("empty strings", [
      equal(cc(""), ""),
      equal(
        cc({
          elf: "",
          orc: "",
          gnome: "",
        }),
        ""
      ),
      equal(cc(["", "", ""]), ""),
    ]),
    t("arrays of strings", [
      equal(cc(["elf", "orc", false, "gnome"]), "elf orc gnome"),
    ]),
    t("array of arrays", [
      equal(cc(["elf", ["orc", [false, "gnome"]]]), "elf orc gnome"),
    ]),
    t("object of key:string pairs", [
      equal(
        cc({
          elf: true,
          orc: true,
          dodo: false,
          gnome: true,
        }),
        "elf orc gnome"
      ),
    ]),
    t("array of objects and arrays", [
      equal(
        cc([
          "elf",
          "half-orc",
          {
            "half-elf": true,
          },
          ["gnome", "goblin", "dwarf"],
        ]),
        "elf half-orc half-elf gnome goblin dwarf"
      ),
    ]),
  ]),
]
