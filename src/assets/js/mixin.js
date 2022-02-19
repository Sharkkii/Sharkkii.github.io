import { breakpoint } from "./const"

let MediaQueryMixin = {
  data: function() {
    return {
      screenHeight: 0,
      screenWidth: 0
    }
  },
  computed: {
    isTooSmall: function() {
      return (breakpoint.min <= this.screenWidth && this.screenWidth < breakpoint.mobile)
    },
    isMobile: function() {
      return (breakpoint.mobile <= this.screenWidth && this.screenWidth < breakpoint.tablet)
    },
    isTablet: function() {
      return (breakpoint.tablet <= this.screenWidth && this.screenWidth < breakpoint.pc)
    },
    isPc: function() {
      return (breakpoint.pc <= this.screenWidth && this.screenWidth < breakpoint.max)
    },
    isTooLarge: function() {
      return (breakpoint.max <= this.screenWidth)
    },
    media: function() {
      if (isMobile) { return "mobile" }
      else if (isTablet) { return "tablet" }
      else if (isPc) { return "pc" }
      else { return "" }
    }
  },
  methods: {
    updateScreenSize: function() {
      this.screenHeight = window.innerHeight
      this.screenWidth = window.innerWidth
    }
  },
  mounted: function() {
    this.updateScreenSize()
    window.addEventListener("resize", this.updateScreenSize)
  }
}

export { MediaQueryMixin }