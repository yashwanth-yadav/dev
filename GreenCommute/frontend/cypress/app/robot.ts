import { BaseHands, BaseEyes, BaseDependencies } from '../e2e/robots/BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitLandingPage(){
        this.accessUrl('/');
        cy.viewport(1024, 768)
    }
}

export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesDomVisible("Landing page")
    }  
}

export class RobotHands extends BaseHands{
    

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")
    }
}