<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <section id="home" class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <!-- Porttrait -->
          <img
            src="../assets/portrait.png"
            alt="Portrait"
            class="object-cover rounded-full inline-block mb-3"
          />
          <h1>
            Je m'appelle Kevin,<br />
            je suis
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >Développeur Web Fullstack
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Passionné par l'univers du développement web,<br />
          laissez moi vous présenter mes projets et bien plus encore !
        </p>

        <div
          class="flex flex-col h-40 md:flex-row md:h-auto items-center justify-around md:space-x-4"
        >
          <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
            <a
              href="/CV Kevin DA RE.pdf"
              class="font-semibold hover:text-cyan-400 transition-colors"
              download
            >
              Télécharger mon CV
            </a>
          </Button>

          <Button
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold group/arrow"
          >
            <a href="https://github.com/Kevin-DA-RE" target="_blank">Github</a>
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>
        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
