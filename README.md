<h1>INTRODUCTION</h1>

<h2>Information</h2>

<p><strong>URL:</strong> https://manage-ticket-api.herokuapp.com<br><br>

<strong>Endpoints</strong>
- POST: /create_ticket<br>
- PUT: &nbsp;&nbsp;/update_ticket<br>
- GET: &nbsp;&nbsp;/view_ticket/all,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/all/sort_by_status,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/all/sort_by_latest,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/filter_status<br></p>
       
<h1>MANUAL</h1>

<h2>Create a ticket</h2>

<p>
<strong>Method:</strong> POST<br>
<strong>Endpoint:</strong> /create_ticket<br>

<strong>Parameters (Essential)</strong><br>
- title: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- description: &nbsp;&nbsp;&nbsp;String<br>
- name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- tel: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (telephone number)<br>
- email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (email address)<br>
</p>
