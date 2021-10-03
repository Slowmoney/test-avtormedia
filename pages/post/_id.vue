<template>
  <div>
    <div class="post">
      <img class="post-image" src="/Saly-16.png" alt />
      <div v-if="openPost" class="post-body">
        <div class="post-title">{{ openPost.title }}</div>
        <div v-if="!isEdit" class="post-text">{{ openPost.body }}</div>
        <template v-else>
          <textarea v-model="editText" rows="10" class="post-textarea"></textarea>
          <div class="post-btn__wrap">
            <Btn @click="saveText">Сохранить изменения</Btn>
            <Btn  variant="secondary" @click="isEdit = false">Отменить</Btn>
          </div>
        </template>

        <div>
          <BtnLink v-if="!isEdit" @click="startEdit">
            <IconPencilCreate />
            <span style="margin-left: 1em;">Редактировать текст</span>
          </BtnLink>
        </div>
        <div class="post-comments">Коментарии</div>
        <div v-for="(e, i) in comments" :key="i" class="comment">
          <div class="comment-avatar">
            <img src="/Avatar.png" />
          </div>
          <div>
            <div class="comment-title">{{ e.name }}</div>
            <div class="comment-text">{{ e.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  async asyncData({ params, store, error }) {
    try {
      await store.dispatch('openPost', params.id)
    } catch (err) {
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
  data: () => ({
    isEdit: false,
    editText: ""
  }),
  computed: {
    ...mapState(['openPost', 'comments'])
  },
  methods: {
    startEdit() {
      this.isEdit = true
      this.editText = this.openPost.body
    },
    saveText(){
      this.isEdit = false
      this.$store.dispatch('saveOpenText', {id: this.openPost.id, body: this.editText})
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 690px) {
  .post {
    padding: 0 !important;
    &-body {
      padding: 0 16px;
    }
    &-btn__wrap{
      max-width: none !important;
    }
  }
  .comment {
    padding: 0 !important;
    &-avatar {
      margin: 8px 12px 12px 0 !important;
    }
  }
}
.post {
  font-family: Manrope;
  color: #000000;
  display: flex;
  padding: 0 90px;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  &-image {
    background-color: #9897f4;
    object-fit: cover;
    height: 280px;
  }
  &-title {
    font-weight: bold;
    font-size: 34px;
    margin-top: 25px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d1d1d6;
  }
  &-text {
    font-size: 18px;
    color: rgba(60, 60, 67, 0.6);
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &-textarea {
    background: #ffffff;
    border: 1px solid #d1d1d6;
    border-radius: 8px;
    width: 100%;
    resize: none;
    outline-color: #ff008a;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  &-comments {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    margin: 30px 0;
  }
  &-btn__wrap{
    display: flex;
    max-width: 80%;
    .btn{
      flex: 1;
    }
    .btn + .btn{
      margin-left: 30px;
    }
  }
}
.comment {
  display: flex;
  padding: 8px;
  &-avatar {
    margin: 8px 12px;
  }
  &-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &-text {
    font-size: 18px;
    color: rgba(60, 60, 67, 0.6);
  }
  & + & {
    margin-top: 20px;
  }
}
</style>
