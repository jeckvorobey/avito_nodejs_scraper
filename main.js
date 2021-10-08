//import cheerio from "cheerio";
import cheerio from 'cheerio'

import puppeteer  from "puppeteer"
import {slugify} from 'transliteration'
import htmlparser2 from 'htmlparser2'

const SITE  = 'https://www.avito.ru/tver/remont_i_stroitelstvo/stroymaterialy-ASgBAgICAURYoAI?f=ASgBAQICAURYoAIBQI69DRTE0jQ&q=%D0%BF%D0%BB%D0%B8%D1%82%D1%8B+%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D1%8F'


function arrayPageLength(num) {
	return Array.from(new Array(num).keys())
}

 const LAUNCH_PUPPETEER_OPTS = {
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-dev-shm-usage',
		'--disable-accelerated-2d-canvas',
		'--disable-gpu',
		'--window-size=1920x1080'
	]
};

 const PAGE_PUPPETEER_OPTS = {
	networkIdle2Timeout: 5000,
	waitUntil: 'networkidle2',
	timeout: 3000000,
	
};

async function getPageContent(url) {
	try {
		const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS)
		const page = await browser.newPage()
		await page.goto(url, PAGE_PUPPETEER_OPTS)
		const sel = page.$$('a[data-marker=item-title]')
		
		const content = await  page.content()
		await browser.close()
		
		return sel
	} catch (e) {
		throw e
	}
}


(async  function main () {
	try {
		for (const num of arrayPageLength(1)) {
			const url = `${SITE}`
			const dom = await  getPageContent(url)
		//	const pageContent = htmlparser2.parseDocument(dom)
			//const $ = cheerio.load(pageContent)
			//const items = []
			
			console.log('ar -->', dom)
			return
			for (const {i, header} of ar) {
				if (header.data('marker') === 'item-title') {
					const url = $(header).attributes('href')
					const title = $(header).childNodes('h3').text()
					
					items.push({
						title,
						url,
						code: slugify(title)
					})
				}
			}
		
	
			
		}
	
	} catch (e) {
		console.log(('ERROR ================================\n'))
		console.log((`message: ${e.message}\n`))
		console.log((`file: ${e.file}\n`))
		console.log((`in line: ${e.line}\n`))
		console.log(('=======================================\n'))
	}
})()