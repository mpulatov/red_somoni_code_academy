const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"], theme: {
		extend: {
			backgroundColor: {
				"main-bg": "#7214EA", "light-gray": "#ECF0F1", "main-green-bg": "#2ECC71", "main-yellow-bg": "#F1C40F"
			}, colors: {
				"main-color": "#7214EA", "text-color": "#22253B"
			}, fontsize: {
				"text-18": "18px", "text-16": "16px", "text-22": "22px", "text-24": "24px"
			}, borderRadius: {
				'large': '50%',
				'min-large': '45%',
				'min': '30px'
			}
		}, container: {
			center: true,
		},
		
	}, plugins: [],
});