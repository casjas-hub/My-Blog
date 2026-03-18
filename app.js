const { createApp } = Vue;

createApp({

  data() {
    return {
      title: "",
      content: "",
      posts: []
    }
  },

  methods: {

    addPost() {

      if (this.title && this.content) {

        this.posts.push({
          title: this.title,
          content: this.content
        });

        this.title = "";
        this.content = "";
      }

    },

    deletePost(index) {
      this.posts.splice(index, 1);
    }

  }

}).mount('#app');