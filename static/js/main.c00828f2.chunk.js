(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i.n(n),s=(i(16),i(11)),r=i(3),c=i(4),o=i(7),l=i(6),d=i(1),m=i.n(d),h=(i(17),i(2)),j=(i(18),i(19),i(0)),u=function(e){var t=e.title,i=e.description,n=e.imgUrl,a=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:n,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[i,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:a,children:"IMDB"})]})]})]})},b=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(u,Object(h.a)({},e),e.imdbId)}))})},p=i(5),g=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={newMovieName:"",movieDescription:"",imgUrl:"",siteUrl:"",imdbId:""},e.clearState=function(){e.setState({newMovieName:"",movieDescription:"",imgUrl:"",siteUrl:"",imdbId:""})},e.handleSubmit=function(t){t.preventDefault();var i=e.state,n={title:i.newMovieName,description:i.movieDescription,imgUrl:i.imgUrl,imdbUrl:i.siteUrl,imdbId:i.imdbId};e.props.addMovie(n),e.clearState()},e}return Object(c.a)(i,[{key:"handleChange",value:function(e){var t=e.target,i=t.id,n=t.value;this.setState((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},i,n))}))}},{key:"render",value:function(){var e=this,t=this.state,i=t.newMovieName,n=t.movieDescription,a=t.imgUrl,s=t.siteUrl,r=t.imdbId;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"Title",className:"input",id:"newMovieName",value:i,onChange:function(t){return e.handleChange(t)},required:!0})}),Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"Description",id:"movieDescription",className:"input",value:n,onChange:function(t){return e.handleChange(t)},required:!0})}),Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"imgUrl",id:"imgUrl",className:"input",value:a,onChange:function(t){return e.handleChange(t)},required:!0})}),Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"siteUrl",id:"siteUrl",className:"input",value:s,onChange:function(t){return e.handleChange(t)},required:!0})}),Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"imdbId",id:"imdbId",className:"input",value:r,onChange:function(t){return e.handleChange(t)},required:!0})}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})}}]),i}(d.Component),v=i(10),O=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(b,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(g,{addMovie:this.addMovie})})]})}}]),i}(m.a.Component);a.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c00828f2.chunk.js.map