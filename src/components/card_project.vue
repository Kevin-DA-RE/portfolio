<template>
<div class="flex flex-row items-center justify-around w-full h-full">
    <div class="w-150 h-150 m-2 border-2 rounded-md border-sky-500 flex flex-col justify-center items-center">
        <img class="h-full object-cover rounded-md " 
        src="/public/project/cine_hightech_2.jpeg" 
        alt="davincimedia" >
    </div>
    <div class="w-300 h-150 m-2">
        <h4 class="text-sky-600 font-bold"></h4>
        <ul class="list bg-base-100 rounded-box shadow-md">        
            <li class="ml-4 mt-5 text-xl text-sky-600 font-bold tracking-wide">Nom du projet</li>            
            <li class="list-row text-xl">
                DA VINCI MEDIA               
            </li>
        </ul>
        <ul class="list bg-base-100 rounded-box shadow-md">        
            <li class="ml-4 mt-5 text-xl text-sky-600 font-bold tracking-wide">Langage et Frameworks</li>            
            <li class="list-row">
                <div><img class="size-7 rounded-box" src="/public/skill/logo_vue.png"/></div>
                <div class="flex flex-col justify-center">
                    <p class="font-bold text-cyan-400 text-md">Vue Js</p>
                </div>                
            </li>
            <li class="list-row">
                <div><img class="size-7  rounded-box" src="/public/skill/logo_laravel.png"/></div>
                <div class="flex flex-col justify-center">
                    <p class="font-bold text-cyan-400 text-md">Laravel</p>
                </div>                
            </li>
        </ul>
        
        <ul class="list bg-base-100 rounded-box shadow-md ">        
            <li class="ml-4 mt-5 text-xl text-sky-600 font-bold tracking-wide">Descriptif</li>            
            <li class="list-col p-4">
                <div class="text-md">
                    Biblioteque de medias, permettant aux utilisateurs de rechercher, d'ajouter et gérer leurs films/series préférés.
                </div>          
                <div class="text-md">
                    Chargement automatique des médias depuis le serveur de l'application
                </div>     
                <div class="text-md">
                    Recherche des informations sur les médias via l'API TMDB
                </div>  
                <div class="text-md">
                    Gestion de médias par utilisateurs
                </div>
            </li>
         
        </ul>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>

</style>