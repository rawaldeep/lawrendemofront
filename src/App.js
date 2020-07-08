import React from 'react';
import {
  Route,
  Switch,
  Router 
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import {
  MainPage,
  // LAWFIRM IMPORTS
  // // ENGLISH
  LawFirmHomepageEn, 
  LawFirmBlogEn, 
  LawFirmChatbotassistantEn,
  LawFirmContractBotEn, 
  LawFirmMlSearchEngineEn, 
  LawFirmFAQEn, 
  LawFirmSingleEn,
  LawfirmUsecasesEN, 
  LawFirmUsecaseSingleEn,
  // // Deutsche 
  LawFirmHomepageDE, 
  LawFirmChatbotassistantDE, 
  LawFirmContractBotDE, 
  LawFirmMlSearchEngineDE, 
  LawFirmBlogDE, 
  LawFirmSingleDE, 
  LawFirmFAQDE, 
  LawfirmUsecasesDE, 
  LawFirmUsecaseSingleDE,
  // // Français
  LawFirmHomepageFR, 
  LawFirmChatbotassistantFR, 
  LawFirmContractBotFR, 
  LawFirmMlSearchEngineFR, 
  LawFirmBlogFR, 
  LawFirmSingleFR, 
  LawFirmFAQFR,
  LawfirmUsecasesFR, 
  LawFirmUsecaseSingleFR,
   // Nederlands
   LawFirmHomepageNL, 
   LawFirmChatbotassistantNL, 
   LawFirmContractBotNL, 
   LawFirmMlSearchEngineNL, 
   LawFirmBlogNL, 
   LawFirmSingleNL, 
   LawFirmFAQNL,
   LawfirmUsecasesNL, 
   LawFirmUsecaseSingleNL,
   // LegalDepartment IMPORTS
  // // ENGLISH
  LegalDepartmentHomepageEn, 
  LegalDepartmentBlogEn, 
  LegalDepartmentChatbotassistantEn,
  LegalDepartmentContractBotEn, 
  LegalDepartmentMlSearchEngineEn, 
  LegalDepartmentFAQEn, 
  LegalDepartmentSingleEn, 
  LegalDepartmentUsecasesEn,
  LegalDepartmentUsecaseSingleEn,
  // // Deutsche 
  LegalDepartmentHomepageDE, 
  LegalDepartmentChatbotassistantDE, 
  LegalDepartmentContractBotDE, 
  LegalDepartmentMlSearchEngineDE, 
  LegalDepartmentBlogDE, 
  LegalDepartmentSingleDE, 
  LegalDepartmentFAQDE, 
  LegalDepartmentUsecasesDE,
  LegalDepartmentUsecaseSingleDE,
  // // Français
  LegalDepartmentHomepageFR, 
  LegalDepartmentChatbotassistantFR, 
  LegalDepartmentContractBotFR, 
  LegalDepartmentMlSearchEngineFR, 
  LegalDepartmentBlogFR, 
  LegalDepartmentSingleFR, 
  LegalDepartmentFAQFR,
  LegalDepartmentUsecasesFR,
  LegalDepartmentUsecaseSingleFR,
   // Nederlands
   LegalDepartmentHomepageNL, 
   LegalDepartmentChatbotassistantNL, 
   LegalDepartmentContractBotNL, 
   LegalDepartmentMlSearchEngineNL, 
   LegalDepartmentBlogNL, 
   LegalDepartmentSingleNL, 
   LegalDepartmentFAQNL,
   LegalDepartmentUsecasesNL,
   LegalDepartmentUsecaseSingleNL    
} from './path';


export default function App() {
  const browserHistory = createBrowserHistory();
  
  let prevLocation = {};
  browserHistory.listen(location => {
    const pathChanged = prevLocation.pathname !== location.pathname;
    const hashChanged = prevLocation.hash !== location.hash;
    if (pathChanged) window.scrollTo(0, 0);
    if(hashChanged){
      const { hash } = location;
      console.log(hash);
      if (hash !== '') {
          // Push onto callback queue so it runs after the DOM is updated,
          // this is required when navigating from a different page so that
          // the element is rendered on the page before trying to getElementById.
          setTimeout(
              () => {
                  const id = hash.replace('#', '');
                  const element = document.getElementById(id);
                  const nav = document.querySelector('.nav');
                  if(nav !== null){
                  if (element) {
                  const offsetPosition = element.offsetTop-(nav.scrollHeight+30);
                      window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                  }
                  }else{
                    if (element) {
                      const offsetPosition = element.offsetTop;
                          window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                      }
                  }
                  
              },
              
          );
      }
    }
    prevLocation = location;
  });

  return (
    <>
    <Router history={browserHistory}>
    <main>
      <Switch>
        {/* routes law firm */}
        {/* English */}
      <Route exact path= "/lawyer/en"  component = {LawFirmHomepageEn} /> 
      <Route exact path="/lawyer/en/chatbotassistant" component={LawFirmChatbotassistantEn}/>
      <Route exact path="/lawyer/en/contractbot" component={LawFirmContractBotEn}/>
      <Route exact path="/lawyer/en/mlsearchengine" component={LawFirmMlSearchEngineEn}/>
      <Route exact path="/FAQ/en" component={LawFirmFAQEn}/>
      <Route exact path="/blog/en" component={LawFirmBlogEn}/>
      <Route exact path="/blog/en/:articleId" component={LawFirmSingleEn}/>
      <Route exact path="/usecase/en/:usecaseId" component={LawFirmUsecaseSingleEn}/>
      <Route exact path="/usecase/en/" component={LawfirmUsecasesEN}/>

      {/* French */}
      <Route exact path= "/lawyer/fr"  component = {LawFirmHomepageFR} /> 
      <Route exact path="/lawyer/fr/chatbotassistant" component={LawFirmChatbotassistantFR}/>
      <Route exact path="/lawyer/fr/contractbot" component={LawFirmContractBotFR}/>
      <Route exact path="/lawyer/fr/mlsearchengine" component={LawFirmMlSearchEngineFR}/>
      <Route exact path="/blog/fr" component={LawFirmBlogFR}/>
      <Route exact path="/FAQ/fr" component={LawFirmFAQFR}/>
      <Route exact path="/usecase/fr/:usecaseId" component={LawFirmUsecaseSingleFR}/>
      <Route exact path="/blog/fr/:articleId" component={LawFirmSingleFR}/>
      <Route exact path="/usecase/fr/" component={LawfirmUsecasesFR}/>

      {/* German */}
      <Route exact path= "/lawyer/de"  component = {LawFirmHomepageDE} /> 
      <Route exact path="/lawyer/de/chatbotassistant" component={LawFirmChatbotassistantDE}/>
      <Route exact path="/lawyer/de/contractbot" component={LawFirmContractBotDE}/>
      <Route exact path="/lawyer/de/mlsearchengine" component={LawFirmMlSearchEngineDE}/>
      <Route exact path="/blog/de" component={LawFirmBlogDE}/>
      <Route exact path="/FAQ/de" component={LawFirmFAQDE}/>
      <Route exact path="/usecase/de/:usecaseId" component={LawFirmUsecaseSingleDE}/>
      <Route exact path="/blog/de/:articleId" component={LawFirmSingleDE}/>
      <Route exact path="/usecase/de/" component={LawfirmUsecasesDE}/>

      {/* Dutch */}
      <Route exact path= "/lawyer/nl"  component = {LawFirmHomepageNL} /> 
      <Route exact path="/lawyer/nl/chatbotassistant" component={LawFirmChatbotassistantNL}/>
      <Route exact path="/lawyer/nl/contractbot" component={LawFirmContractBotNL}/>
      <Route exact path="/lawyer/nl/mlsearchengine" component={LawFirmMlSearchEngineNL}/>
      <Route exact path="/blog/nl" component={LawFirmBlogNL}/>
      <Route exact path="/FAQ/nl" component={LawFirmFAQNL}/>
      <Route exact path="/usecase/nl/:usecaseId" component={LawFirmUsecaseSingleNL}/>
      <Route exact path="/blog/nl/:articleId" component={LawFirmSingleNL}/>
      <Route exact path="/usecase/nl/" component={LawfirmUsecasesNL}/>


       {/* routes LegalDepartment */}
        {/* English */}
      <Route exact path= "/legaldepartment/en"  component = {LegalDepartmentHomepageEn} /> 
      <Route exact path="/legaldepartment/en/chatbotassistant" component={LegalDepartmentChatbotassistantEn}/>
      <Route exact path="/legaldepartment/en/contractbot" component={LegalDepartmentContractBotEn}/>
      <Route exact path="/legaldepartment/en/mlsearchengine" component={LegalDepartmentMlSearchEngineEn}/>
      <Route exact path="/legaldepartment/FAQ/en" component={LegalDepartmentFAQEn}/>
      <Route exact path="/legaldepartment/blog/en" component={LegalDepartmentBlogEn}/>
      <Route exact path="/legaldepartment/blog/en/:articleId" component={LegalDepartmentSingleEn}/>
      <Route exact path="/legaldepartment/usecase/en/:usecaseId" component={LegalDepartmentUsecaseSingleEn}/>
      <Route exact path="/legaldepartment/usecase/en/" component={LegalDepartmentUsecasesEn}/>

      {/* French */}
      <Route exact path= "/legaldepartment/fr"  component = {LegalDepartmentHomepageFR} /> 
      <Route exact path="/legaldepartment/fr/chatbotassistant" component={LegalDepartmentChatbotassistantFR}/>
      <Route exact path="/legaldepartment/fr/contractbot" component={LegalDepartmentContractBotFR}/>
      <Route exact path="/legaldepartment/fr/mlsearchengine" component={LegalDepartmentMlSearchEngineFR}/>
      <Route exact path="/legaldepartment/blog/fr" component={LegalDepartmentBlogFR}/>
      <Route exact path="/legaldepartment/FAQ/fr" component={LegalDepartmentFAQFR}/>
      <Route exact path="/legaldepartment/usecase/fr/:usecaseId" component={LegalDepartmentUsecaseSingleFR}/>
      <Route exact path="/legaldepartment/blog/fr/:articleId" component={LegalDepartmentSingleFR}/>
      <Route exact path="/legaldepartment/usecase/fr/" component={LegalDepartmentUsecasesFR}/>

      {/* German */}
      <Route exact path= "/legaldepartment/de"  component = {LegalDepartmentHomepageDE} /> 
      <Route exact path="/legaldepartment/de/chatbotassistant" component={LegalDepartmentChatbotassistantDE}/>
      <Route exact path="/legaldepartment/de/contractbot" component={LegalDepartmentContractBotDE}/>
      <Route exact path="/legaldepartment/de/mlsearchengine" component={LegalDepartmentMlSearchEngineDE}/>
      <Route exact path="/legaldepartment/blog/de" component={LegalDepartmentBlogDE}/>
      <Route exact path="/legaldepartment/FAQ/de" component={LegalDepartmentFAQDE}/>
      <Route exact path="/legaldepartment/usecase/de/:usecaseId" component={LegalDepartmentUsecaseSingleDE}/>
      <Route exact path="/legaldepartment/blog/de/:articleId" component={LegalDepartmentSingleDE}/>
      <Route exact path="/legaldepartment/usecase/de/" component={LegalDepartmentUsecasesDE}/>

      {/* Dutch */}
      <Route exact path= "/legaldepartment/nl"  component = {LegalDepartmentHomepageNL} /> 
      <Route exact path="/legaldepartment/nl/chatbotassistant" component={LegalDepartmentChatbotassistantNL}/>
      <Route exact path="/legaldepartment/nl/contractbot" component={LegalDepartmentContractBotNL}/>
      <Route exact path="/legaldepartment/nl/mlsearchengine" component={LegalDepartmentMlSearchEngineNL}/>
      <Route exact path="/legaldepartment/blog/nl" component={LegalDepartmentBlogNL}/>
      <Route exact path="/legaldepartment/FAQ/nl" component={LegalDepartmentFAQNL}/>
      <Route exact path="/legaldepartment/usecase/nl/:usecaseId" component={LegalDepartmentUsecaseSingleNL}/>
      <Route exact path="/legaldepartment/blog/nl/:articleId" component={LegalDepartmentSingleNL}/>
      <Route exact path="/legaldepartment/usecase/nl/" component={LegalDepartmentUsecasesNL}/>

      <Route exact path= "/" component={MainPage}/>
      <Route render={MainPage}/>
      </Switch>
    </main>
    </Router>
    </>
  )
}