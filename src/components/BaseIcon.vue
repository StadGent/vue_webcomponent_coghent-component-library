<template>
  <div v-html="icons[icon]"></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
type CustomIcon =
  | "storybox"
  | "globe"
  | "delete"
  | "edit"
  | "logout"
  | "user"
  | "close"
  | "info"
  | "link"
  | "check"
  | "fullscreen"
  | "monitor"
  | "zoomIn"
  | "zoomOut"
  | "chest"
  | "talk";
const icons: Record<CustomIcon, String> = {
  talk: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15 1H2c-.552 0-1 .448-1 1v10c0 .552.448 1 1 1h4l2.5 3 2.5-3h4c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1zM4 5h9M4 9h9"/>
</svg>`,
  storybox: `<svg v-if="icon == 'verhalenbox'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.5.5h11M11.5 6.5v2h-7v-2" />
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.5 3.5H.5v11h15v-11z" />
  </svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c2.367 0 4.286-3.358 4.286-7.5 0-4.142-1.919-7.5-4.286-7.5-2.367 0-4.286 3.358-4.286 7.5 0 4.142 1.919 7.5 4.286 7.5zM1 8.5h15M8.5 1v15"/>
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c4.142 0 7.5-3.358 7.5-7.5C16 4.358 12.642 1 8.5 1 4.358 1 1 4.358 1 8.5 1 12.642 4.358 16 8.5 16z"/>
</svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2 6v8c0 .53.21 1.04.586 1.414C2.96 15.79 3.47 16 4 16h7c.53 0 1.04-.21 1.414-.586C12.79 15.04 13 14.53 13 14V6M1 4h13M5 4V1h5v3M5 13l5-5M10 13L5 8"/>
</svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5l-4-4M6 15l-5 1 1-5L12 1l4 4L6 15z"/>
</svg>`,
  logout: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5.5 8.5h10M11.5 4.5l4 4-4 4M8.5 15.5h-7c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7"/>
</svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18">
    <path stroke="#F6F5F1" stroke-linecap="round" stroke-linejoin="round" d="M11.182 4.333C11.182 2.493 9.757 1 8 1S4.818 2.492 4.818 4.333v1.334C4.818 7.507 6.243 9 8 9s3.182-1.492 3.182-3.333V4.333zM1 17v-2c-.001-.999.193-1.988.57-2.905.378-.917.931-1.744 1.625-2.428M12.807 9.667c.693.685 1.246 1.511 1.623 2.428.377.918.571 1.906.57 2.905v2"/>
</svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 3L3 14M3 3l11 11"/>
</svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path d="M8 5.5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 15c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM8 12V8"/>
</svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995 7.005c1.375 1.374 1.375 3.601 0 4.975l-1.99 1.99c-1.373 1.374-3.6 1.374-4.974 0-1.375-1.374-1.375-3.6 0-4.975l1.748-1.698"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005 8.995c-1.374-1.374-1.374-3.601 0-4.975l1.99-1.99c1.374-1.374 3.601-1.374 4.975 0 1.374 1.374 1.374 3.601 0 4.975l-1.748 1.698"/>
</svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1 9l4 4L15 3"/>
</svg>`,
  fullscreen: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5H.5v13h15v-13z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7.5V4H9.5M6.5 12H3V8.5"/>
</svg>`,
  monitor: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="16 height="16" viewBox="0 0 52.666 52.666" style="enable-background:new 0 0 52.666 52.666;"
	 xml:space="preserve">
	<path d="M48.832,3.125H3.834C1.721,3.125,0,4.846,0,6.959v28.997c0,2.115,1.721,3.835,3.834,3.835h21.499v7.75h-6.875
		c-0.552,0-1,0.448-1,1c0,0.554,0.448,1,1,1h15.625c0.552,0,1-0.446,1-1c0-0.552-0.448-1-1-1h-6.75v-7.75h21.499
		c2.113,0,3.834-1.72,3.834-3.835V6.959C52.666,4.846,50.945,3.125,48.832,3.125z M50.666,35.957c0,1.012-0.822,1.835-1.834,1.835
		H3.834C2.822,37.792,2,36.968,2,35.957V6.959c0-1.012,0.822-1.835,1.834-1.835h44.998c1.012,0,1.834,0.823,1.834,1.835V35.957z"/>
</svg>`,
  zoomOut: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 227.406 227.406" style="enable-background:new 0 0 227.406 227.406;" xml:space="preserve">
	<path d="M217.575,214.708l-65.188-67.793c16.139-15.55,26.209-37.356,26.209-61.485
		C178.596,38.323,140.272,0,93.167,0C46.06,0,7.737,38.323,7.737,85.43c0,47.106,38.323,85.43,85.43,85.43
		c17.574,0,33.922-5.339,47.518-14.473l66.078,68.718c1.473,1.531,3.439,2.302,5.407,2.302c1.87,0,3.743-0.695,5.197-2.094
		C220.353,222.441,220.446,217.693,217.575,214.708z M22.737,85.43c0-38.835,31.595-70.43,70.43-70.43
		c38.835,0,70.429,31.595,70.429,70.43s-31.594,70.43-70.429,70.43C54.332,155.859,22.737,124.265,22.737,85.43z"/>
	<path d="M131.414,77.93H54.919c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h76.495
		c4.143,0,7.5-3.357,7.5-7.5S135.557,77.93,131.414,77.93z"/>
</svg>`,
  zoomIn: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		<path d="M506.141,477.851L361.689,333.399c65.814-80.075,61.336-198.944-13.451-273.73c-79.559-79.559-209.01-79.559-288.569,0
			s-79.559,209.01,0,288.569c74.766,74.766,193.62,79.293,273.73,13.451l144.452,144.452c7.812,7.812,20.477,7.812,28.289,0
			C513.953,498.328,513.953,485.663,506.141,477.851z M319.949,319.948c-63.96,63.96-168.03,63.959-231.99,0
			c-63.96-63.96-63.96-168.03,0-231.99c63.958-63.957,168.028-63.962,231.99,0C383.909,151.918,383.909,255.988,319.949,319.948z"/>
		<path d="M301.897,183.949h-77.94v-77.94c0-11.048-8.956-20.004-20.004-20.004c-11.048,0-20.004,8.956-20.004,20.004v77.94h-77.94
			c-11.048,0-20.004,8.956-20.004,20.004c0,11.048,8.956,20.004,20.004,20.004h77.94v77.94c0,11.048,8.956,20.004,20.004,20.004
			c11.048,0,20.004-8.956,20.004-20.004v-77.94h77.94c11.048,0,20.004-8.956,20.004-20.004
			C321.901,192.905,312.945,183.949,301.897,183.949z"/>
</svg>`,
  chest: `<svg viewBox="0 0 133 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4048 60.6641H58.6619" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M84.2002 60.6641H114.457" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M104.861 75.0055C108.37 70.3264 115.163 69.2577 117.874 69.4746L117.875 84.725H101.933V84.7248C101.933 83.098 101.933 78.9095 104.861 75.0055Z" fill="white"/>
<path d="M37.7141 75.4071C34.2046 70.728 27.4115 69.6593 24.7003 69.8762L24.7002 85.1265H40.6421V85.1264C40.6421 83.4995 40.6421 79.311 37.7141 75.4071Z" fill="white"/>
<rect x="24.8501" y="46.2" width="92.35" height="38.8" rx="1" stroke="white" stroke-width="2"/>
<path d="M110.162 34.3L116.513 45.9H25.5411L31.9188 34.3H110.162Z" stroke="white" stroke-width="2"/>
<path d="M23.8501 17.15L31.7126 34.15H110.665L118.2 17.15H23.8501Z" stroke="white" stroke-width="2"/>
<path d="M23 16.9419L22.5039 16.8796L22.4333 17.4419H23V16.9419ZM119.05 16.9419V17.4419H119.617L119.546 16.8796L119.05 16.9419ZM34.6728 0.5C30.5369 0.5 27.6527 3.34804 25.7492 6.73313C23.8411 10.1263 22.8429 14.1787 22.5039 16.8796L23.4961 17.0042C23.8241 14.3911 24.7936 10.4726 26.6208 7.22329C28.4525 3.96593 31.0712 1.5 34.6728 1.5V0.5ZM70.6914 0.5H34.6728V1.5H70.6914V0.5ZM70.6914 1.5H71.3586V0.5H70.6914V1.5ZM71.3586 1.5H107.377V0.5H71.3586V1.5ZM107.377 1.5C110.979 1.5 113.597 3.96593 115.429 7.22329C117.256 10.4726 118.226 14.3911 118.554 17.0042L119.546 16.8796C119.207 14.1787 118.209 10.1263 116.301 6.73313C114.397 3.34804 111.513 0.5 107.377 0.5V1.5ZM119.05 16.4419H71.3586V17.4419H119.05V16.4419ZM71.3586 16.4419H70.6914V17.4419H71.3586V16.4419ZM23 17.4419H70.6914V16.4419H23V17.4419Z" fill="white"/>
<path d="M16.5 23C14 22.3333 9 19.2 9 12" stroke="white"/>
<path d="M1 23C3.5 22.3333 8.5 19.2 8.5 12" stroke="white"/>
<path d="M1 23C3.5 23.6667 8.5 26.8 8.5 34" stroke="white"/>
<path d="M16.5 23C14 23.6667 9 26.8 9 34" stroke="white"/>
<path d="M22 37.3871C20.5484 37 17.6452 35.1806 17.6452 31" stroke="white"/>
<path d="M13 37.3871C14.4516 37 17.3548 35.1806 17.3548 31" stroke="white"/>
<path d="M13 37.3871C14.4516 37.7742 17.3548 39.5935 17.3548 43.7742" stroke="white"/>
<path d="M22 37.3871C20.5484 37.7742 17.6452 39.5935 17.6452 43.7742" stroke="white"/>
<path d="M132 9.3871C130.548 9 127.645 7.18064 127.645 3" stroke="white"/>
<path d="M123 9.3871C124.452 9 127.355 7.18064 127.355 3" stroke="white"/>
<path d="M123 9.38707C124.452 9.77417 127.355 11.5935 127.355 15.7742" stroke="white"/>
<path d="M132 9.38707C130.548 9.77417 127.645 11.5935 127.645 15.7742" stroke="white"/>
<path d="M62 46H81V57.5C81 62.7467 76.7467 67 71.5 67V67C66.2533 67 62 62.7467 62 57.5V46Z" stroke="white" stroke-width="2"/>
<path d="M55.7339 74.3286H101.282" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.3055 55.8638C73.8678 55.3593 74.2215 54.627 74.2215 53.8121C74.2215 52.2901 72.9876 51.0562 71.4656 51.0562C69.9436 51.0562 68.7098 52.2901 68.7098 53.8121C68.7098 54.6268 69.0633 55.359 69.6254 55.8636L68.0972 61.4672H74.8337L73.3055 55.8638Z" fill="white"/>
</svg>`,
};

export default defineComponent({
  props: {
    icon: {
      type: String as PropType<CustomIcon>,
      default: "storybox",
      required: true,
    },
  },
  setup() {
    return { icons };
  },
});
</script>

<style scoped></style>
