<template>
    <div class="card-project-container">
        <div class="card-block">
            <!-- Remplacez ceci par votre contenu de carte (image, icône, etc.) -->
            <div class="card-image"></div>
        </div>
        <div class="text-block">
            <h2>Titre du projet</h2>
            <p>
                Ceci est une description du projet. Ajoutez ici les détails ou informations importantes.
            </p>
        </div>
    </div>
</template>

<script setup>
// Pas de logique pour ce template simple
</script>

<style scoped>
.card-project-container {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.card-block {
    width: 200px;
    height: 250px;
    background: #f5f5f5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-image {
    width: 120px;
    height: 120px;
    background: #ccc;
    border-radius: 8px;
}

.text-block {
    flex: 1;
}

.text-block h2 {
    margin: 0 0 0.5rem 0;
}

.text-block p {
    margin: 0;
}
</style>