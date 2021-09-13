# Postman

Postman is a free web testing service that provides an easy, fast, and solid software for developers to learn and maintain a web service contract from both the provider and consumer. As such, Postman has become a widely used tool for contract testing and reference due to its User Experience.

To streamline development and integration with OY!, we have created a Postman Collection at your disposal. Get started by installing Postman here.

Prerequisites: You must have received an authorization Username and API Key from us to access our feature. Contact us at partner@oyindonesia.com to receive your authorization information now.

## Getting Started

The easiest way to get started using our API is to use our Postman Collection. Postman is a free client application that enables you to make calls using API easily. To make integrating with our API easier, we have created Postman Collection of all our endpoints so that you can test our APIs more easily.

The following is an outline of actions to get started with Postman

[![Run in Postman](images/button_postman.svg)](https://app.getpostman.com/run-collection/1dd40b2f4a76f6465ae8?action=collection%2Fimport)

You’ll need to create a OY! indonesia account to access OY! APIs via Postman Collection

## API Authorization

* On the left hand side of your screen, navigate to the Collections tab. Select one of our API from our Payment Checkout Postman collection to test. 
* The screenshot below uses Detail > Get Detail Payment/Invoice as an example
* Open the “Headers” tab and add the following key-value pairs: **Content-Type** with **application/json**, **X-Oy-Username** with your **username** and **X-Api-Key** with your **API Key**

![header](images/postman_checkout_header.png)

* Your Authorization header configuration has been complete. Click the blue “Send” button and check your response window to retrieve your payment information response. 

![header_result](images/postman_checkout_header_finish.png)


## Create a Postman Variable Environment

The Postman Variable Environment provides you with the capabilities to save authorization configurations. You can use these saved configurations for all your Postman Requests. This step is optional.

* Locate the gear icon at the upper right corner of your Postman screen
* On the pop-up menu, click “Add” and give an Environment name. For example, “OY! Payment”

![header](images/postman_checkout_add_environtment.png)

* Add **base_url** in the Variable column and set the value to **https://partner.oyindonesia.com** in Current Value column
* Add **username** in the Variable column and set the value to your **username** in the Current Value column
* Add **api_key** in the Variable column and set the value to your **API Key** value in the Current Value column
* Click “Add” to save. You can later re-visit and update these values.

![header](images/postman_checkout_setup_environtment.png)

* To utilize the created environment, locate the environment management menu at the upper left corner of your screen. It should be to the left of the eye icon. 
* In the drop down menu, choose the environment that you have just created. 

![header](images/postman_checkout_choose_environtment.png)

You just set your authorization value header with environment variable which already configured.


## Test one of our API Calls

* On the left hand side of your screen, navigate to the Collections tab. Select one of our API from our Payment Checkout Postman collection to test. 
* The screenshot below uses Detail > Get Detail Payment/Invoice as an example
* Replace [https://partner.oyindonesia.com](https://partner.oyindonesia.com) in the GET url with **{{base_url}}** as the value 
* Replace the **X-Oy-Username** key-value pair to **{{username}}** as the value 
* Replace the **X-Api-Key** key-value pair to **{{api_key}}** as the value
* Click the blue “Send” button and check your response window to retrieve your payment information response.

![header](images/postman_checkout_detail.png)

If you were able to complete all these steps, your environment is working perfectly and is on the right track. Feel free to test out our other API products or contact us at [partner@oyindonesia.com](partner@oyindonesia.com) if you encountered any difficulties testing our Postman Collection. 