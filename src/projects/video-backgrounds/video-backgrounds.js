// import Flickity from 'vue-flickity';
// import flickityAsNavFor from 'flickity-as-nav-for';
import WebBrowserBar from '../../components/web-browser-bar/web-browser-bar.vue';


export default {
	components: {
		// Flickity,
    'webBrowserBar': WebBrowserBar,
	},
  props: [
    'incognitoMode',
  ],
  data () {
    return {
      selectedBackground: 0,
    };
  },
  mounted() {
    var carousel = document.querySelector(".carousel");
    var flkty = new Flickity(carousel, {
    // ..
    });

    flkty.on("change", function() {
      console.log("Flickity active slide: " + flkty.selectedIndex);

      flkty.cells.forEach(function(cell, i) {
        if (cell.element == flkty.selectedElement) {
          // play video if active slide contains one
          // use <video playsinline ..> in your html to assure it works on ios devices
          var video = cell.element.querySelector("video");
          if (video) {
            console.log("playing video " + i);
            video.play();
          }
          return;
        }

        // pause all other videos
        var video = cell.element.querySelector("video");
        if (video) {
          console.log("pausing video " + i);
          video.pause();
        }
      });
    });
  },
}