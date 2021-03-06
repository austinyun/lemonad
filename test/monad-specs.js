describe("Monadic functions", function() {
  describe("actions", function() {
    it("should carry forward the intermediate state properly", function() {
      var push = L.lift(function(stack, e) {
        return _.cons(e, stack);
      });

      var pop = L.lift(_.first, _.rest);

      var computation = L.actions([
        push(4),
        push(5),
        push(6),
        pop(),
        pop()],

        function (values, state) {
          return state;
        }
      );

      var answer = computation([]);

      expect(answer).toEqual([4]);
    });
  });
});
