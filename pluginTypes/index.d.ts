/// <amd-module name="@scom/scom-puppeteer-scraper" />
declare module "@scom/scom-puppeteer-scraper" {
    import { ICookie, ICookieParam, IKeyInput, IPageEvent, IPageLifeCycle, IScraperEngine } from "@scom/scom-scraper-sdk";
    import { Browser, Page } from "puppeteer";
    export default class PuppeteerScraper implements IScraperEngine {
        private browser;
        private page;
        keyboard: ScraperKeyboard;
        constructor();
        init(): Promise<void>;
        click(selector: string): Promise<void>;
        type(selector: string, value: string, timeout?: number, delay?: number): Promise<void>;
        goto(url: string, timeout?: number, waitUntil?: IPageLifeCycle | IPageLifeCycle[]): Promise<import("puppeteer").HTTPResponse>;
        waitForNavigation(timeout?: number, waitUntil?: IPageLifeCycle | IPageLifeCycle[]): Promise<import("puppeteer").HTTPResponse>;
        waitForSelector(selector: string, timeout?: number): Promise<import("puppeteer").ElementHandle<Element>>;
        scrollToBottom(delay?: number): Promise<void>;
        evaluate(fn: () => Promise<any>): Promise<any>;
        waitForRequest(urlOrPredict: string | ((response: any) => Promise<boolean>)): Promise<import("puppeteer").HTTPRequest>;
        waitForResponse(urlOrPredict: string | ((response: any) => Promise<boolean>)): Promise<import("puppeteer").HTTPResponse>;
        removeAllListeners(eventType?: IPageEvent): Page;
        on(event: IPageEvent, callback: (response: any) => Promise<any>): Page;
        getCookies(): Promise<ICookie[]>;
        setCookie(...cookies: ICookieParam[]): Promise<void>;
        destroy(): Promise<void>;
        getBrowserAndPage(): Promise<{
            browser: Browser;
            page: Page;
        }>;
        private sleep;
    }
    class ScraperKeyboard {
        private page;
        constructor(page: Page);
        up(key: IKeyInput): Promise<void>;
        down(key: IKeyInput): Promise<void>;
        press(key: IKeyInput, delay?: number): Promise<void>;
        type(text: string): Promise<void>;
        sendCharacter(char: string): Promise<void>;
    }
}
