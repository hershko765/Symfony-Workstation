describe("Creating a Channel",function(){var e,t,n="test",r,i,s;beforeEach(function(){e=new Wreqr.Channel(n)}),it("should set the name",function(){expect(e.channelName).toEqual(n)}),it("should instantiate a new instance of each messaging system",function(){expect(e.vent instanceof Backbone.Wreqr.EventAggregator).toBeTruthy(),expect(e.commands instanceof Backbone.Wreqr.Commands).toBeTruthy(),expect(e.reqres instanceof Backbone.Wreqr.RequestResponse).toBeTruthy()})});