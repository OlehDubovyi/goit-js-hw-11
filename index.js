import{a as m,S as d,i as n}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="56042782-24f3f911d5d7a62af18e10af9",g="https://pixabay.com/api/";function h(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}const l=document.querySelector(".gallery"),c=document.querySelector("#loader");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
            />
            <div class="image-info">
              <p class="info-item">
                <b>Likes</b>
                ${r}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${a}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${f}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${u}
              </p>
            </div>
          </a>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function S(){c.classList.add("is-visible")}function v(){c.classList.remove("is-visible")}const q=document.querySelector("#search-form");q.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget,t=o.elements["search-text"].value.trim();if(t===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(t).then(i=>{i.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(i.hits)}).catch(i=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{v(),o.reset()})}
//# sourceMappingURL=index.js.map
