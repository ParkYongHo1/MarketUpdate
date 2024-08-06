<style>
  .team-container {
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(to right, #f0f0f0, #e0e0e0);
  }
  .team-member {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    width: 150px;
    text-align: center;
    padding: 15px;
  }
  .team-member:hover {
    transform: translateY(-5px);
  }
  .team-member img {
    border-radius: 50%;
    border: 3px solid #3498db;
  }
  .team-member b {
    display: block;
    margin-top: 10px;
    color: #2c3e50;
  }
  .team-member br {
    display: none;
  }
  .role {
    font-size: 0.9em;
    color: #7f8c8d;
  }
</style>

<div class="team-container">
  <div class="team-member">
    <a href="https://github.com/member1"><img src="https://avatars.githubusercontent.com/u/103355252?v=4" width="100px" alt="박용호">
    <b>박용호</b></a>
    <span class="role">프론트엔드</span>
  </div>
  <div class="team-member">
    <a href="https://github.com/member5"><img src="https://avatars.githubusercontent.com/u/117808340?v=4" width="100px" alt="김태희">
    <b>김태희</b></a>
    <span class="role">프론트엔드</span>
  </div>
  <div class="team-member">
    <a href="https://github.com/member4"><img src="https://avatars.githubusercontent.com/u/117807455?v=4" width="100px" alt="문진호">
    <b>문진호</b></a>
    <span class="role">벡엔드</span>
  </div>
  <div class="team-member">
    <a href="https://github.com/member2"><img src="https://avatars.githubusercontent.com/u/117808375?v=4" width="100px" alt="신영서">
    <b>신영서</b></a>
    <span class="role">벡엔드</span>
  </div>
  <div class="team-member">
    <a href="https://github.com/member3"><img src="https://avatars.githubusercontent.com/u/105470710?v=4" width="100px" alt="문웅기">
    <b>문웅기</b></a>
    <span class="role">벡엔드</span>
  </div>
</div>
