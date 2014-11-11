searchlist
==================================================
A simple JS search script to search through a list of items

Usage:

<b>1 Create an input form for the search function</b>

Example (Bootstrap 3):
```
<nav>
<form role="search" class="navbar-form">
    <div class="form-group has-feedback">
        <input type="text" autofocus placeholder="Search by Title" class="form-control">
        <div data-toggle="navbar-search-dismiss" class="fa fa-times form-control-feedback"></div>
    </div>
</form>
</nav>
```
<b>2 Create the list within a section block called search</b>

Example:
```
  <section class="search">
    <div class="panel widget">
      <ul class="list-group">
        <li class="list-group-item"><a href="/1/">Item1</a></li>
          <li class="list-group-item"><a href="/2/">Item2</a></li>
          <li class="list-group-item"><a href="/3/">Item3</a></li>
          <li class="list-group-item"><a href="/4/">Item4</a></li>
      </ul>
    </div>
  </section>
  ```
<b>3 Include searchlist.js at the bottom of your page</b>

Example:
```
	<script src="app/js/searchlist.js"></script>
