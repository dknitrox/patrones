import { production } from 'production';
import { develop } from 'develop';
const config;
switch(process.env.ENV){
	case 'production':{
		config=production;
	},
	case 'develop':{
		config=develop;
		break;
	}
	default:{
		config=develop;
	}
}

export default config;