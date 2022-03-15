<h1>INTRODUCTION</h1>

<h2>Information</h2>

<p><strong>URL:</strong> https://manage-ticket-api.herokuapp.com<br><br>

<strong>Endpoints</strong>
- POST: /create_ticket<br>
- PUT: &nbsp;&nbsp;/update_ticket<br>
- GET: &nbsp;&nbsp;/view_ticket/all,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/all/sort_by_status,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/all/sort_by_latest,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/view_ticket/filter_status<br><br><br></p>
       
<h1>MANUAL</h1>

<h2>Create a ticket</h2>

<p>
<strong>Method:</strong> POST<br>
<strong>Endpoint:</strong> /create_ticket<br>
<strong>Description:</strong> Create a new ticket<br>

<strong>Parameters (all essential)</strong><br>
- title: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- description: &nbsp;&nbsp;&nbsp;String<br>
- name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- tel: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (telephone number)<br>
- email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (email address)<br><br>
</p>

<h2>Update a ticket</h2>

<p>
<strong>Method:</strong> PUT<br>
<strong>Endpoint:</strong> /update_ticket<br>
<strong>Description:</strong> Update some infomation from a specific ticket<br>

<strong>Parameters</strong><br>
- (essential) id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int<br>
- (optional) title: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- (optional) description: &nbsp;&nbsp;&nbsp;String<br>
- (optional) name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String<br>
- (optional) tel: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (telephone number)<br>
- (optional) email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String (email address)<br>
- (optional) status: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String ("pending", "accepted", "resolved", "rejected")<br><br>
</p>

<h2>View all tickets</h2>

<p>
<strong>Method:</strong> GET<br>
<strong>Endpoint:</strong> /view_ticket/all<br>
<strong>Description:</strong> View all available tickets<br><br>
</p>

<h2>View all tickets and sort by status</h2>

<p>
<strong>Method:</strong> GET<br>
<strong>Endpoint:</strong> /view_ticket/sort_by_status<br>
<strong>Description:</strong> View all available tickets and will be sorted by status (pending, accepted, resolved and rejected in order)<br><br>
</p>























