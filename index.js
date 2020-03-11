'use strict'


class CountdownTimer{
  constructor({selector,targetDate}){

    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
    this.body = document.querySelector('body')
    this.sec = document.querySelector('.value[data-value="secs"]');
    this.min = document.querySelector('.value[data-value="mins"]')
    this.hour = document.querySelector('.value[data-value="hours"]')
    this.day = document.querySelector('.value[data-value="days"]')

  }

  // renderMakup(){
  //   return this.body.insertAdjacentHTML('afterbegin' ,'<div class="timer" id="timer-1"><div class="field"><span class="value" data-value="days">11</span><span class="label">Days</span></div><div class="field"><span class="value" data-value="hours">11</span><span class="label">Hours</span></div><div class="field"><span class="value" data-value="mins">11</span><span class="label">Minutes</span></div><div class="field">    <span class="value" data-value="secs">11</span> <span class="label">Seconds</span></div></div>')
  // }

  
  delta(){
    const time = this.targetDate - Date.now()
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.sec.textContent = secs <10 ? `0${secs}`: secs
    this.min.textContent = mins<10 ? `0${mins}` : mins
    this.hour.textContent = hours<10 ? `0${hours}` : hours
    this.day.textContent = days
  }

  start(){
    this.timerId = setInterval(this.delta.bind(this),1000);

  }

  init(){
    document.addEventListener('DOMContentLoaded', this.start.bind(this))
  }
}


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Marc 20, 2020'),
  });
  timer.init()
