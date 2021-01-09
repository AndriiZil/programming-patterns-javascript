class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMemberShip,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type];
        const member = new MemberShip(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}) ${this.cost}`);
        }

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Andrii'),
    factory.create('Elena', 'premium'),
    factory.create('Oleg', 'standard'),
    factory.create('Igor', 'simple'),
];

members.forEach(m => {
    m.define()
});
