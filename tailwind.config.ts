import preset from "@hoppscotch/ui/ui-preset"


export default {
 content: [
   "packages/hoppscotch-common/src/**/*.{vue,html}",
   "packages/hoppscotch-sh-admin/src/**/*.{vue,html}",
 ],
 presets: [preset],
 theme: {
   colors: {
     primary: '#080808',
   },
   extend: {
     colors: {
       primary: '#080808',
     },
   }
 }
}
