module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "bg-img": "url(../src/assets/bg_img.png)",
        "bg-dot": "url(../src/assets/new design/dotGrid.png)",
        "bg-bookmark": "url(../src/assets/new design/bookmark.png)",
        "bg-smallBookmark": "url(../src/assets/new design/small_bookmark.png)",
      },
      boxShadow: {
        none: "0px 0px 0px #000000",
        hover: "3px 3px 0px #000000",
        hoverCard: "5px 5px 0px #000000",
        hoverMenu: "4px 4px 0px #000000",
      },
      colors: {
        "app-primary": "#091F2A",
        "app-secondary": "#021626",
        "sa-menu-green": "#004643",
        "sa-success-green": "#139F00",
        "sa-icon-green": "#2d8078",
        "sa-text-gray": "#272727",
        "sa-text-gray-2": "#232323",
        "sa-dark-green": "#004643",
        "sa-light-brown": "#78716C",
        "sa-brick-red": "#FF7051",
        "sa-primary-yellow": "#FFDC25",
        "sa-border-black":"#191919",
        green: {
          500: "#1CC800",
          600: "#A4FF95",
        },
        red: {
          500: "#FF94A4",
        },
        grey: {
          100: "#5B5B5B",
          200: "#DEDEDE",
        },
        yellow: {
          100: "#F7CB45",
          200: "#FFDC25",
        },
        blue: {
          100: "#1E44CD",
          900: "#101828",
        },
      },
      spacing: {
        9.5: "2.375rem",
        4.5: "1.125rem",
      },
      fontSize: {
        10: ["10px", "14px"],
      },
      rotate: {
        18: "18deg",
      },
      screens: {
        tablet: "600px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        "2md":"950px",
        "3md":"1286px",
        "2xl": "1440px",
        "3xl": "1640px",
        "4xl": "1920px",

        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  // plugins: [require("daisyui")],
};
