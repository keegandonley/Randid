# Randid
Create unique ID numbers on the fly using UTC time and random number, including custom attributes.
<br>
<br>
<hr>
<code>.create([identifier])</code>

<code>var IDnumber = randid.create([identifier])</code>

<b> identifier</b>:<br>
<em>Optional</em><br>
type: string or number<br>
<em> Additional attribute to include in the ID, in the format \<number>.\<number>\<identifier> <br>
Example: <code>14738401913740.3256069523461649\<identifier></code>
<hr>
<code>.store(ID, [overwrite])</code>

<code>randid.store(ID, [overwrite])</code><br>
Stores randid ID in localstorage<br><br>
<b> ID</b>:<br>
<em>Required</em><br>
type: string <br>
<em> The ID generated using randid.create </em>

<b> overwrite</b>:<br>
<em>Optional</em><br>
type: boolean<br>
<em> Overwite the current ID, if it exists. (Defaut: false)</em>
<hr>
<code>.get()</code>

<code>randid.get()</code><br>
Gets the randid ID from localstorage
<hr>
<code>.clear()</code>

<code>randid.clear()</code><br>
Removes the randid ID variable from localstorage
