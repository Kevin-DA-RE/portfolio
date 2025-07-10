<template>
  <div class="flex flex-row items-center justify-around w-full h-full">
    <div class="card bg-base-100 w-80 shadow-sm m-5">
      <div class="card-body">
        <h2 class="card-title">DA VINCI MEDIA</h2>
      </div>
      <figure>
        <img src="/public/project/cine_hightech_2.jpeg" alt="Shoes" class="rounded-xl" />
      </figure>
    </div>
    <div class="w-200 m-2 h-100 content-end">
      <ul class="list bg-base-100 shadow-md">
        <li class="ml-4 text-xl text-sky-600 font-bold tracking-wide">Langage et Frameworks</li>
        <li class="list-row flex flex-row items-center justify-between w-50">
          <div>
            <img class="size-7" src="/skill/logo_vue.png" />
            <p class="text-center font-bold text-cyan-400 text-md">Vue Js</p>
          </div>
          <div>
            <img class="size-7" src="/skill/logo_laravel.png" />
            <p class="text-center font-bold text-cyan-400 text-md">Laravel</p>
          </div>
        </li>
      </ul>
      <ul class="list bg-base-100 shadow-md">
        <li class="ml-4 text-xl text-sky-600 font-bold tracking-wide">Code source / site web</li>
        <li class="flex flex-row items-center justify-between px-4 py-2 w-50">
          <div class="text-center">
            <img class="size-7 mx-auto" src="/skill/logo_git.png" alt="Git Logo" />
            <a
              href="https://github.com/Kevin-DA-RE/davincimedia"
              target="_blank"
              rel="noopener noreferrer"
              class="block font-bold text-cyan-400 text-md hover:underline cursor-pointer mt-2"
              >GitHub
            </a>
          </div>

          <div class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 stroke-cyan-500 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p class="font-bold text-cyan-400 text-md mt-2">Site web</p>
          </div>
        </li>
      </ul>

      <ul class="list bg-base-100 shadow-md">
        <li class="ml-4 mt-5 text-xl text-sky-600 font-bold tracking-wide">Descriptif</li>
        <li class="list-col p-4">
          <div class="text-md flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>
              Biblioteque de medias, permettant aux utilisateurs de rechercher, d'ajouter et gérer
              leurs films/series préférés.
            </p>
          </div>
          <div class="text-md flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
            Chargement automatique des médias depuis le serveur de l'application
          </div>
          <div class="text-md flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>Recherche des informations sur les médias via l'API TMDB</div>
          <div class="text-md flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>Gestion de médias par utilisateurs</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
