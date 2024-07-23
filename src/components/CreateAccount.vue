<script setup>
import { states } from '@/utils/state';
</script>
<template>
    <main>
        <section>
            <div>
                <h2>Robilson</h2>
                <h2>CONSÓRCIOS</h2>
            </div>

            <h1>Create</h1>
            
            <section>
                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <input type="email">
                </div>

                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>   
                <input type="text">
                </div>

                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <input type="text">
                </div>

                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <input type="text">
                </div>

                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <input type="text">
                </div>
            </section>

            <section>
                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <input type="text">
                </div>

                <div class="box-inputs">
                <div class="box-inputs-img"></div>
                <div class="box-inputs-tittle"></div>
                <select id="">
                    <option v-for="state in states" :key="state.id" :value="state.id" >{{ state.name }}</option>
                </select>
                </div>
                
               <div class="box-input-hobbies">
                <div class="box-hobbies-send">
                    <h3>Hobbies</h3>
                    <button>Send</button>
                </div>

                <div class="box-hobbies-list">
                    <ul>
                        <li><p>OLA</p> <button>X</button></li>
                    </ul>
                </div>

               </div>

               <div class="box-input-languages">
                <div class="box-hobbies-send">
                    <h3>Languages</h3>
                </div>

                <div class="box-hobbies-list">
                    <ul>
                        <li>
                            <input type="checkbox">
                            <p>Python</p> 
                        </li>
                    </ul>
                </div>
               </div>
            </section>

            <section>
                <div class="box-input-biography">
                    <div class="box-biography-tittle">
                        <h3>Biography</h3>
                    </div>
                   <textarea></textarea>
                </div>

                <div class="box-">
                    <div class="box-i">
                        <h3>Profile Photo</h3>
                    </div>
                    <input type="file">
                </div>
            </section>

            <div class="box-btn-create">
                <button>Create</button>
            </div>

            <div class="box-changeTo-login">
                <p>Already have an account?</p>
                <p @click="$emit('login')">Login</p>
            </div>
        </section>
    </main>

</template>