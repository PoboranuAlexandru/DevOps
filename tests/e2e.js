import {Selector} from 'testcafe';
 
// tests/e2e.js
// Fixtures are test categories - each test has to be a part of one
fixture `Hello World Tests`
    .page `https://hello-world-dss.herokuapp.com/`;
 
test('Test1', async t => {
  // The t parameter we have here is our "control knob" - we can
  // use it to perform various tasks in the browser that we'll open
 
  // Tests usually do things like check if elements exist.
  // In this example, we'll check that the h1 element has the "Welcome" string
  // in it:
  const h1TitleElement = Selector('h1') // We use CSS selectors here
 
 
  await t.expect(h1TitleElement.textContent).contains('Welcome') 
})