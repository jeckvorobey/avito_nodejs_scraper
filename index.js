import cheerio from "cheerio";


import { arrayPageLength } from "helpers/helpers.js";
import { getPageContent } from "helpers/puppeteer.js";

const SITE = 'https://www.avito.ru/tver/remont_i_stroitelstvo/stroymaterialy-ASgBAgICAURYoAI?f=ASgBAQICAURYoAIBQI69DRTE0jQ&q=%D0%BF%D0%BB%D0%B8%D1%82%D1%8B+%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D1%8F';

(async function main(){
	try {
		for (const num of arrayPageLength(1)) {
			const url = `${SITE}`
			const dom = await getPageContent(url)
			const $ = cheerio.load(dom)
			
			console.log('ar -->', dom)
		}
	} catch (e) {
		console.log('ERROR ================================\n')
		console.log(`message: ${e.message}\n`)
		console.log(`file: ${e.file}\n`)
		console.log(`in line: ${e.line}\n`)
		console.log('=======================================\n')
	}
})()