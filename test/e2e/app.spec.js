import express from 'express';
import { expect } from 'chai';
import path from "path";
import Nightmare from 'nightmare';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
    let httpServer = null;
    let pageObject = null;

    before((done) => {
        httpServer = app.listen(8888);
        done();
    });

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });

    after((done) => {
        httpServer.close();
        done();
    });

    it('should contain a <h1> element for the page title', () => { 
        return pageObject
            .evaluate(() => document.querySelector('h1').innerText)
            .then(headerText => {
            expect(headerText).to.not.be.null;
            expect(headerText).to.equal('Mortgage Calculator');
        });
    });

    it('should contain an input element for the principal', () => { 
        return pageObject
            .evaluate(() => document.getElementsByName("principal").length)
            .then(elements => {
            expect(elements).to.equal(1);
        });
    });

    it('should contain an input element for the interest', () => { 
        return pageObject
            .evaluate(() => document.getElementsByName("interest").length)
            .then(elements => {
            expect(elements).to.equal(1);
        });
    });

    it('should contain an input element for the term', () => { 
        return pageObject
            .evaluate(() => document.getElementsByName("term").length)
            .then(elements => {
            expect(elements).to.equal(1);
        });
    });

    it('should contain a select element for the period', () => { 
        return pageObject
            .evaluate(() => document.getElementsByName("period").length)
            .then(elements => {
            expect(elements).to.equal(1);
        });
    });

    it('should contain a calculate button', () => { 
        return pageObject
            .evaluate(() => document.querySelector('button').innerText)
            .then(buttonText => {
            expect(buttonText).to.not.be.null;
            expect(buttonText).to.equal('Calculate');
        });
    });

    it('should contain a p element with id output', () => { 
        return pageObject
            .evaluate(() => document.getElementById('output'))
            .then(element => {
            expect(element).to.not.be.null;

        });
    });

    it('should correctly calculate mortgage', () =>
        pageObject
        .wait()
        .type('input[name=principal]', 300000)
        .type('input[name=interest]', 3.75)
        .type('input[name=term]', 30)
        .select('select[name=period]', 12)
        .click('button#calculate')
        .wait('#output')
        .evaluate(() => document.querySelector('#output').innerText)
        .then((outputText) => {
            expect(outputText).to.equal('$1389.35');
        })
        ).timeout(6500);
})