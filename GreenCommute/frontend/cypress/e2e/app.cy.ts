import { RobotEyes, RobotHands, Dependencies } from '../app/robot';

context('Search Test', () => {
  const robotEyes = new RobotEyes();
  const dependencies = new Dependencies();
  const robotHands = new RobotHands();

  describe('Search the required information', () => {
    it('navigate to Langing page', () => {
      dependencies.visitLandingPage();
    });

    it('Landing page content test..', () => {
      robotEyes.seesMainPage;
      robotEyes.seesDomContainText(
        '.MuiGrid-container > .MuiGrid-root > .MuiTypography-root',
        'More than 2000 people are using Green Commute'
      );
      
    });

    it('Landing page functionality check..', () => {
      robotHands.clickOnDomElement('#autocomplete').wait(2000);
      robotHands.clickOnId('autocomplete-option-2').wait(2000);
      robotHands.clickOnDomElement('a > .MuiButton-root > .MuiTypography-root').wait(2000);
      robotHands.clickOnDomElement(
        '.MuiButton-textInherit > .MuiTypography-root'
      ).wait(2000);
      robotHands.clickOnDomElement('#autocomplete').wait(2000);
      robotHands.clickOnId('autocomplete-option-1').wait(2000);
      robotHands.clickOnDomElement('a > .MuiButton-root > .MuiTypography-root').wait(2000);
    });

    it('job card click test..',()=>{
      robotHands.clickOnDomElement(':nth-child(1) > [data-testid="jobcard"]').wait(2000);
      robotEyes.seesDomContainText(
        '.css-1wx4s0x > :nth-child(3)',
        'Description'
      );
    });

    it('save jobs test..',()=>{
      robotHands.clickOnDomElement('.MuiButton-outlined > .MuiTypography-root').wait(2000);
      robotHands.clickOnDomElement(
        `[role="handleSavedJobs"] > .MuiButton-root > .MuiTypography-root`
      ).wait(2000);
      robotEyes.seesDomContainText(
        '.css-10eyw91-MuiTypography-root',
        'Saved Jobs'
      );

      robotHands.clickOnDomElement(
        `[role="handleFindJobs"] > .MuiButton-root > .MuiTypography-root`
      ).wait(2000);
    });

    it('click apply test..',()=>{
      robotHands.clickOnDomElement(
        '.MuiButton-contained > .MuiTypography-root'
      ).wait(2000);
      robotEyes.seesDomContainText('.MuiTypography-h2', 'File Upload');
      robotHands.clickOnDomElement(
        '.css-0 > .MuiBox-root > .MuiButton-root > .MuiTypography-root'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '.css-avd57r > .MuiBox-root > .MuiButton-root > .MuiTypography-root'
      ).wait(2000);
    });

    it('filter functionality test..',()=>{
      robotHands.clickOnDomElement(
        '.MuiGrid-grid-sm-3 > .MuiButton-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(2) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(3) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(4) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);

      robotHands.clickOnDomElement(
        ':nth-child(2) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(3) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(2) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(4) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(2) > .MuiGrid-container > .css-13i4rnv-MuiGrid-root > :nth-child(5) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);

      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-1c41aze-MuiGrid-root > :nth-child(3) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-1c41aze-MuiGrid-root > :nth-child(4) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(1) > .MuiGrid-container > .css-1c41aze-MuiGrid-root > :nth-child(5) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);

      robotHands.clickOnDomElement(
        ':nth-child(2) > .MuiGrid-container > .css-1c41aze-MuiGrid-root > :nth-child(2) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        ':nth-child(2) > .MuiGrid-container > .css-1c41aze-MuiGrid-root > :nth-child(4) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);

      robotHands.clickOnDomElement(
        '.css-1i58daw-MuiGrid-root > :nth-child(3) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);
      robotHands.clickOnDomElement(
        '.css-1i58daw-MuiGrid-root > :nth-child(5) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root'
      ).wait(100);

      robotHands.clickOnDomElement(
        '[style="display: flex; justify-content: flex-end; margin-top: 11px; padding-right: 25px;"] > .MuiButton-contained > .MuiTypography-root'
      ).wait(100);
    });

    it('common routes test..',()=>{
      robotHands.clickOnDomElement(
        '.MuiCardActions-root > .MuiButton-root > .MuiTypography-root'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '[data-testid="handleMetroButton"] > .MuiButton-root > img'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '[data-testid="handleCarButton"] > .MuiButton-root > img'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '[data-testid="handleMetroButton"] > .MuiButton-root > img'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '.css-1wx4s0x > :nth-child(3) > .MuiButton-root > img'
      ).wait(2000);
    });

    it('Search bar test...', () => {
      robotHands.typeTextonDomForce('.css-abvfjo > .MuiInput-root > .MuiInput-input','UI').wait(2000);

      robotHands.clickOnDomElement(
        '.MuiListItemText-root > .MuiTypography-root'
      ).wait(2000);

      robotHands.clickOnDomElement('.css-bymsth > .MuiButton-root > img').wait(2000);
      robotHands.clickClearOnDomElement('.css-abvfjo > .MuiInput-root > .MuiInput-input').wait(2000)
      
      robotHands.clickOnDomElement('.css-bymsth > .MuiButton-root > img').wait(2000);

      robotEyes.seesDomContainText(
        '.css-15cja6w-MuiGrid-root > .MuiTypography-root',
        'Job list'
      );
      
    });
    it('close and clear all functionality on filter tags..',()=>{
      robotHands.clickOnDomElement(
        ':nth-child(9) > .MuiButtonBase-root > [data-testid="close"]'
      ).wait(2000);
      robotHands.clickOnDomElement(
        ':nth-child(11) > .MuiButtonBase-root > [data-testid="close"]'
      ).wait(2000);
      robotHands.clickOnDomElement(
        '.css-1swc4f-MuiGrid-root > .MuiTypography-root'
      ).wait(2000);
    });
  });
});
