import { test } from '@playwright/test';

test('credentials sources based on different run', async ({ page }) => {
    console.log("User: ",     process.env.pre.APP_USER);
    console.log("Password: ", process.env.APP_PASS);
    console.log("Base url: ", process.env.BASE_URL);

    console.log(process.env.DOCUPORT_BETA_URL); 

});


 