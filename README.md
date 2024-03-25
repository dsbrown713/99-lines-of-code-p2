<h1>99 Lines of Code In The File - Part 2</h1>
<p>Covalence</p>
<h2>Info</h2>
<ul>
<li>This lab consists of two parts</li>
<li>In this second iteration you will be transforming part 1 of the lab</li>
<li>You should copy your files from part 1 and paste them along with this README file into a new folder linked to a new github repository</li>
</ul>
<h3>New Objectives</h3>
<ul>
<li>Put a <code>button</code> in the HTML that says <code>Sing!</code>
<ul>
<li>Stepping Stone: When you click the button, all the <code>console.log</code> statements from the previous lab should happen. They SHOULD NOT happen before the button is clicked.</li>
</ul></li>
<li>When you have the button setup and working correctly as described, then:
<ul>
<li>Delete the <code>div</code> with class <code>friend</code> and the headings and paragraphs it contains from your html file</li>
<li>Go to your code where you are "singing the song" and accomplish the following using DOM:
<ul>
<li>For every one of your friends, create a <code>div</code> with class <code>friend</code></li>
<li>Put an <code>h3</code> containing your friend's name in the div</li>
<li>Then, instead of using <code>console.log</code> to put the song lyrics in the console, create a paragraph for each song lyric line and put that paragraph in the <code>friend</code> div.</li>
</ul></li>
</ul></li>
<li>To Recap:
<ul>
<li>When you have made these modifications, the page should start out just showing a button labeled "Sing!"</li>
<li>Nothing will be logged to the console</li>
<li>Clicking the button will cause 5 <code>div</code> elements with class name <code>friend</code> to be added to the page, one for each of your friends</li>
<li>Each div contains a friend's name as an h3 and 99 paragraphs, each one representing a lyric line that you previously were logging to the console in part 1 of this lab.</li>
</ul></li>
</ul>
<h2>Hints</h2>
<ul>
<li>You will be using DOM functions to complete this portion of the lab</li>
<li>Remember that elements can be added to other elements
<ul>
<li>document.body.appendChild(someElement);</li>
<li>someOtherElement.appendChild(anotherElement);</li>
</ul></li>
</ul>