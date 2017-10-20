module.exports = {
  establishFunc: function(cls){
    return function(diObj){
      diObj[cls.name] = cls
      cls._depInj = diObj
      return cls
    }
  },
  get: function(cls, name){
    return cls._depInj[name]
  }
}
